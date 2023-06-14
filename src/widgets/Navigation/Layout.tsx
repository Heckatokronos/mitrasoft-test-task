import { Navigation } from "./Navigation";

import "./Layout.scss";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }, props) => {
  const classes = "main " + props.className;

  return (
    <>
      <Navigation />
      <main className={classes}>{children}</main>
    </>
  );
};