import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { gql } from "urql";

import { useTreasuryBalanceQuery } from "../codegen/juicebox";
import { ButtonLink } from "./Button";
import { juiceboxUrl } from "./constants";
import { Container } from "./Container";

gql`
  query TreasuryBalance($projectIds: [Int!]!) {
    projects(where: { projectId_in: $projectIds }) {
      id
      currentBalance
    }
  }
`;

type Props = {
  name: string;
  usdBudget: number;
  projectId: number;
};

const numberWithCommas = (x: number) => {
  return Math.round(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const ContributeBanner = ({ name, usdBudget, projectId }: Props) => {
  const [ethPrice, setEthPrice] = useState(0);

  useEffect(() => {
    async function fetchPrice() {
      const response = await fetch(
        "https://api.coinbase.com/v2/prices/ETH-USD/spot"
      );
      const data = await response.json();
      setEthPrice(data.data.amount);
    }
    fetchPrice();
  }, [ethPrice]);

  const [queryResult] = useTreasuryBalanceQuery({
    variables: {
      projectIds: [projectId],
    },
  });

  const balance = queryResult.data?.projects
    ?.map((p) => ethers.BigNumber.from(p.currentBalance))
    .reduce((a, b) => a.add(b), ethers.BigNumber.from(0));

  const ethRaised = balance ? parseFloat(ethers.utils.formatEther(balance)) : 0;

  return (
    <Container>
      <div className="relative">
        <div className=" p-6 w-xl mx-auto bg-zinc-800 rounded-xl border border-zinc-400 min-w-sm">
          <div className="flex flex-col text-sm sm:text-lg sm:flex-row gap-4 justify-between">
            <div>
              ✦ Support the development of {name}.
              <div className="mt-2 mb-2 sm:m-0 w-[100%] sm:w-0 bg-gray-200 h-2 rounded-xl">
                <div
                  style={{
                    width:
                      Math.round((ethRaised * ethPrice * 100) / usdBudget) +
                      "%",
                  }}
                  className="bg-emerald-600 h-2 rounded-xl"
                ></div>
              </div>
              <div className="flex text-zinc-500">
                <span className="text-emerald-600 pr-1">
                  ${numberWithCommas(ethRaised * ethPrice)}{" "}
                </span>{" "}
                <span className="mr-1">raised</span>
                <div className="w-0 sm:w-32 md:w-56 bg-gray-200 h-2 rounded-xl ml-0 m-0 sm:m-2 md:mt-3">
                  <div
                    style={{
                      width:
                        Math.round((ethRaised * ethPrice * 100) / usdBudget) +
                        "%",
                    }}
                    className="bg-emerald-600 h-2 rounded-xl"
                  ></div>
                </div>
                out of{" "}
                <span className="text-white px-1">
                  ${numberWithCommas(usdBudget)}
                </span>{" "}
                funding goal
              </div>
            </div>
            <div className="md:w-max hidden lg:block">
              <div className="flex">
                <ButtonLink
                  href={`${juiceboxUrl}/v2/p/${projectId}`}
                  target="_blank"
                  variant="primary"
                >
                  Buy Superticket
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};