import React from "react";
import { PageLayout } from "../components/PageLayout";
import { RecipeTile } from "../components/RecipeTile";

export const HomeScreen: React.FC = () => {
  const topRecipes = [
    {
      id: "00000000-0000-0000-0000-000000000001",
      name: "Hake",
      picture: "https://images.immediate.co.uk/production/volatile/sites/30/2017/03/Hake-3ce7ac3.jpg",
    },
    {
      id: "00000000-0000-0000-0000-000000000002",
      name: "Caramel-Apple Crisp",
      picture: "https://i.pinimg.com/236x/12/ce/ee/12ceee56f899ad19535580e8c1615005--caramel-apple-crisp-caramel-apples.jpg",
    },
    {
      id: "00000000-0000-0000-0000-000000000003",
      name: "Peanut Butter Cookies",
      picture: "https://i.pinimg.com/236x/ff/16/0e/ff160e9b00f846cc7cfb3fcee39dcfda.jpg",
    },
    {
      id: "00000000-0000-0000-0000-000000000004",
      name: "Chipotle Sausage Tacos",
      picture: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_30,w_1260/hellofresh_s3/image/HF_Y23_R1608_W39_UK_ASB15981-5_Main_low-a789065e.jpg",
    },
    {
      id: "00000000-0000-0000-0000-000000000005",
      name: "Parmigiano, Pine Nut & Wild Rocket Side Salad",
      picture: "https://img.hellofresh.com/w_256,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/HF_Y23_R1605_W39_UK_ASD16629-11_Main_6_low-348480c1.jpg",
    },
  ];

  return (
    <PageLayout>
      <section className="flex justify-center align-middle w-full h-full">
        <div className="flex align-middle p-1 flex-wrap">
          { topRecipes.map((recipe2, i) => <RecipeTile recipe={recipe2}></RecipeTile>) }
        </div>
      </section>
    </PageLayout>
  );
};
