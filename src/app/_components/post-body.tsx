import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div
        <script data-apikey="aERpcc4gSZSOM_JcHsn0ng" data-env="us01" src="https://us01ccistatic.zoom.us/us01cci/web-sdk/zcc-sdk.js"></script>
      />
    </div>
  );
}
