import React from "react";
import {
  Card,
  CardHeader,
  Text,
  Badge,
  makeStyles,
  tokens,
  Divider,
} from "@fluentui/react-components";
import { ShieldCheckmarkRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    paddingTop: "64px",
  },
  title: {
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: "4px",
    color: tokens.colorNeutralForeground1,
  },
  subtitle: {
    fontSize: "18px",
    color: tokens.colorNeutralForeground3,
    textAlign: "center" as const,
  },
  card: {
    width: "100%",
    maxWidth: "560px",
    padding: "24px",
  },
  moduleLabel: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground3,
    marginTop: "16px",
    textAlign: "center" as const,
  },
  devNote: {
    fontSize: "13px",
    color: tokens.colorNeutralForeground4,
    fontStyle: "italic",
    textAlign: "center" as const,
    marginTop: "8px",
  },
});

const HomePage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div style={{ textAlign: "center" }}>
        <Text className={styles.title}>AetherWatch</Text>
        <div className={styles.subtitle}>
          Predictive AI Model &amp; Agent Reliability Platform
        </div>
      </div>

      <Card className={styles.card}>
        <CardHeader
          image={<ShieldCheckmarkRegular fontSize={24} />}
          header={<Text weight="semibold">System Status</Text>}
          description={
            <Badge appearance="filled" color="success">
              Online
            </Badge>
          }
        />
        <Divider style={{ margin: "16px 0" }} />
        <Text className={styles.moduleLabel}>
          Module 01 – Foundation Setup
        </Text>
        <Text className={styles.devNote}>
          This is only a temporary development screen, not the final dashboard.
        </Text>
      </Card>
    </div>
  );
};

export default HomePage;

