const { default: Head } = require("next/head");

const Meta = ({ title, keywords, description }) => {
  <Head>
    <title>{title}</title>
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="keyword" content={keywords} />
  </Head>;
};

Meta.defaultProps = {
  title: "Tour Management System",
  keywords: "Tour Website, tour-management-system, tour-service, Tour Services",
  description: "Be update on travel services from us",
};
export default Meta;
