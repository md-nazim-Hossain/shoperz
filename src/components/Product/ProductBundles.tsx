import TitleWrapper from "../shared/TitleWrapper";

function ProductBundles() {
  return (
    <div className="bg-secondary/10  pt-3 pb-14">
      <div className="container space-y-5">
        <TitleWrapper
          title={
            <>
              Bundles <span className="text-tertiary/50">(4)</span>
            </>
          }
          className="border-b-0 py-5"
        />
      </div>
    </div>
  );
}

export default ProductBundles;
