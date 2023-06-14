import { ReuseCard } from "../../shared";
import { MyBio } from "./about-me";

export const MyProfile: React.FC = () => {
  return (
    <>
      {MyBio.map((data) => (
        <ReuseCard
          avatar={data.avatar}
          title={data.fullName}
          body={data.expirience}
          website={data.website}
        />
      ))}
    </>
  );
};
