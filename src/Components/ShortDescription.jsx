const ShortDescription = ({ shortDesc = [] }) => {
  console.log(shortDesc);
  const details = {
    colors: [],
    sizes: [],
    fabric: "",
  };

  // Regular expressions to extract data from short_desc
  const colorRegex = /(?:Available Colors:)([^\r\n]*)/i;
  const sizeRegex = /(?:Available sizes:)([^\r\n]*\*)/i;
  const fabricRegex = /(?:Fabric:)([^\r\n]*)/i;

  // Extract colors
  const colorMatch = shortDesc.match(colorRegex);
  if (colorMatch) {
    details.colors = colorMatch[1].split("|").map((color) => color.trim());
  }

  // Extract sizes
  const sizeMatch = shortDesc.match(sizeRegex);
  if (sizeMatch) {
    details.sizes = sizeMatch[1]
      .split("*")
      .map((size) => size.trim())
      .filter((size) => size);
  }

  // Extract fabric details
  const fabricMatch = shortDesc.match(fabricRegex);
  if (fabricMatch) {
    details.fabric = fabricMatch[1].trim();
  }

  return details;
};

const ProductDetail = ({ product }) => {
  const { colors, sizes, fabric } = parseProductDetails(
    product?.short_desc || ""
  );

  return (
    <div className="product-details">
      <h3 className="text-lg font-bold">Product Details</h3>

      {colors.length > 0 && (
        <div className="colors">
          <h4 className="font-semibold">Available Colors:</h4>
          <ul className="list-disc pl-5">
            {colors.map((color, index) => (
              <li key={index} className="text-gray-700">
                {color}
              </li>
            ))}
          </ul>
        </div>
      )}

      {sizes.length > 0 && (
        <div className="sizes">
          <h4 className="font-semibold">Available Sizes:</h4>
          <ul className="list-disc pl-5">
            {sizes.map((size, index) => (
              <li key={index} className="text-gray-700">
                {size}
              </li>
            ))}
          </ul>
        </div>
      )}

      {fabric && (
        <div className="fabric">
          <h4 className="font-semibold">Fabric:</h4>
          <p className="text-gray-700">{fabric}</p>
        </div>
      )}
    </div>
  );
};

export default ShortDescription;
