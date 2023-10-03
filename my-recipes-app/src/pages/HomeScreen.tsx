import React, { useEffect, useReducer } from "react";
import { PageLayout } from "../components/PageLayout";
import { RecipeTile } from "../components/RecipeTile";
import { Trans, useTranslation } from "react-i18next";
import { TopRecipeReducer } from "../services/reducers/TopRecipeReducer";
import { RecipeTileModel } from "../models/RecipeTileModel";
import { ApiResponse } from "../models/ApiResponse";
import RecipeService from "../services/RecipeService";

export const HomeScreen: React.FC = () => {
  const [apiResponse, dispatch] = useReducer(TopRecipeReducer, { data: null, loading: true, error: null });
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const response: ApiResponse<RecipeTileModel[]> = await RecipeService.getTop(10, 1, 5);
      if (response.error) {
        dispatch({ type: "FETCH_ERROR", payload: response.error });
      } else {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data || [] });
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      <section className='flex flex-col justify-center align-middle w-full h-full p-4 self-start'>
        <div className='pb-4'>
          <Trans i18nKey='pages.home.text'>some text in here</Trans>
        </div>
        <section className='flex flex-col justify-center items-center w-full h-full'>
          <div className='flex justify-center flex-wrap w-1/2'>
            <header className='flex justify-between w-full'>
              <h2 className='text-xl'>
                <Trans i18nKey='components.topRecipes.title'>Top Recipes</Trans>
              </h2>
              <select defaultValue='1'>
                <option key='0' value={t("components.topRecipes.topOptions.day")}>
                  Day
                </option>
                <option key='1' value={t("components.topRecipes.topOptions.week")}>
                  Week
                </option>
                <option key='2' value={t("components.topRecipes.topOptions.month")}>
                  Month
                </option>
                <option key='3' value={t("components.topRecipes.topOptions.year")}>
                  Year
                </option>
                <option key='4' value={t("components.topRecipes.topOptions.all")}>
                  All Time
                </option>
              </select>
            </header>
            <div className='flex justify-center flex-wrap'>
              {apiResponse.error ? (
                <div>there was an error</div>
              ) : (
                apiResponse.data?.map((recipe2, i) => <RecipeTile recipe={recipe2}></RecipeTile>)
              )}
            </div>
            <footer></footer>
          </div>
        </section>
      </section>
    </PageLayout>
  );
};
