import { ApiResponse } from "../models/ApiResponse";
import { RecipeTileModel } from "src/models/RecipeTileModel";
import { AppError } from "src/models/AppError";

const RecipeService = {
  getTop: async (
    count: number = 10,
    page: number = 1,
    pageSize: number = 10
  ): Promise<ApiResponse<Array<RecipeTileModel>>> => {
    try {
      const uri = process.env.REACT_APP_GATEWAY_URL;

      const testdata = [
        {
          id: "00000000-0000-0000-0000-000000000001",
          name: "Hake",
          picture: "https://images.immediate.co.uk/production/volatile/sites/30/2017/03/Hake-3ce7ac3.jpg",
        },
        {
          id: "00000000-0000-0000-0000-000000000002",
          name: "Caramel-Apple Crisp",
          picture:
            "https://i.pinimg.com/236x/12/ce/ee/12ceee56f899ad19535580e8c1615005--caramel-apple-crisp-caramel-apples.jpg",
        },
        {
          id: "00000000-0000-0000-0000-000000000003",
          name: "Peanut Butter Cookies",
          picture: "https://i.pinimg.com/236x/ff/16/0e/ff160e9b00f846cc7cfb3fcee39dcfda.jpg",
        },
        {
          id: "00000000-0000-0000-0000-000000000004",
          name: "Chipotle Sausage Tacos",
          picture:
            "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_30,w_1260/hellofresh_s3/image/HF_Y23_R1608_W39_UK_ASB15981-5_Main_low-a789065e.jpg",
        },
        {
          id: "00000000-0000-0000-0000-000000000005",
          name: "Parmigiano, Pine Nut & Wild Rocket Side Salad",
          picture:
            "https://img.hellofresh.com/w_256,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/HF_Y23_R1605_W39_UK_ASD16629-11_Main_6_low-348480c1.jpg",
        },
        {
          id: "00000000-0000-0000-0000-000000000001",
          name: "Hake",
          picture: "https://images.immediate.co.uk/production/volatile/sites/30/2017/03/Hake-3ce7ac3.jpg",
        },
      ];

      //TODO: add the headers... either here or a interceptor
    //   const response = await fetch(`${uri}/api/v1/recipes/top?count=${count}&page=${pageSize}&page=${page}`);
    //   if (!response.ok) {
    //     const capturedError: AppError = { ...(await response.json()), code: response.status };
    //     return { error: capturedError, loading: false, data: null };
    //   }

      const data: RecipeTileModel[] = testdata; // response.status === 204 ? [] : await response.json();
      data.map((entity) => {
        entity.id, entity.name, entity.picture;
      });
      return { error: null, loading: false, data: data };
    } catch (error: any) {
      return {
        error: {
          code: 0,
          errorCode: "UNKOWN_ERROR",
          message: `There was an uncaught error while retrieving the top recipes ${error.message}`,
        },
        loading: false,
        data: null,
      };
    }
  },
};

export default RecipeService;
