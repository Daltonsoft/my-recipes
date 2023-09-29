import { Trans } from "react-i18next";
import { SocialMediaItemModel } from "../../models/SocialMediaItemModel";

export interface Props {
  item: SocialMediaItemModel;
}
export const SocialMediaItem: React.FC<Props> = ({ item }) => {
  return (
    <div className='flex items-center p-1 cursor-pointer' onClick={() => window.open(item.href, "_blank")}>
      <div className="w-12 h-12">
        {item.svg}
      </div>
      <span>
        <Trans i18nKey={item.localizationString}>{item.localizationString}</Trans>
      </span>
    </div>
  );
};
