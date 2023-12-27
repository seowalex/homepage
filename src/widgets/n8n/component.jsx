import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();
  const { widget } = service;

  const { data: activeData, error: activeError } = useWidgetAPI(widget, "active");
  const { data: inactiveData, error: inactiveError } = useWidgetAPI(widget, "inactive");

  if (activeError || inactiveError) {
    const finalError = activeError ?? inactiveError;
    return <Container service={service} error={finalError} />;
  }

  if (!activeData || !inactiveData) {
    return (
      <Container service={service}>
        <Block label="n8n.active" />
        <Block label="n8n.inactive" />
      </Container>
    );
  }

  return (
    <Container service={service}>
      <Block label="n8n.active" value={t("common.number", { value: activeData.data.length })} />
      <Block label="n8n.inactive" value={t("common.number", { value: inactiveData.data.length })} />
    </Container>
  );
}
