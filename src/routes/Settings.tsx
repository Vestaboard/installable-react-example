import { CircularProgress } from "@material-ui/core";
import {
  Title,
  Body,
  Spacer,
  Button,
  useVestaboardSubscriptionConfigInformation,
} from "@vestaboard/installables";

export const Settings = () => {
  const config = useVestaboardSubscriptionConfigInformation();

  if (config.loading) {
    return <CircularProgress />;
  }

  // If you pass in your subscription_id and subscription_configuration_token as querystring parameters in the URL, the config data will be available here
  console.log(config.data);

  return (
    <>
      <Title>Vestaboard Example Installable</Title>
      <Spacer size="medium" />
      <Body>
        This is an example of how to use the Installable kit in the Vestaboard
        installable settings page.
      </Body>
      <Spacer size="medium" />
      <Body>
        Installables are embedded in the Plus section via an iframe where we
        pass in the <strong>subscription_id</strong> and{" "}
        <strong>subscription_configuration_token</strong> as querystring
        parameters in the iFrame source.
      </Body>
      <Spacer size="extraLarge" />
      <a
        href="https://vestaboard.gitlab.io/installable-kit"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Button buttonType="white" onClick={() => {}}>
          Component React Storybook
        </Button>
      </a>
    </>
  );
};
