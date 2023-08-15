function ProductDescription() {
  return (
    <div className="pt-10 space-y-5">
      {[1, 2, 3].map(i => {
        return (
          <div key={i}>
            <h4 className="font-medium">Description</h4>
            <p className="text-secondary/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              excepturi eos id. Repellat maiores mollitia molestias voluptates?
              Animi, voluptatibus asperiores.
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDescription;
