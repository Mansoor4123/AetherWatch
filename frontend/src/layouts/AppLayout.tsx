import React from "react";
import {
  FluentProvider,
  webDarkTheme,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 32px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground3,
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "2px",
  },
  headerSubtitle: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
  },
  main: {
    padding: "32px",
    maxWidth: "960px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },
});

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webDarkTheme}>
      <div className={styles.root}>
        <header className={styles.header}>
          <div>
            <div className={styles.headerTitle}>AetherWatch</div>
            <div className={styles.headerSubtitle}>
              Predictive AI Model &amp; Agent Reliability Platform
            </div>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </FluentProvider>
  );
};

export default AppLayout;

