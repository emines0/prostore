import { cn } from "@/lib/utils"

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
  //Ensure to format the price to two decimal places
  const stringValue = value.toFixed(2)

  // Get the int and float parts
  const [intPart, floatPart] = stringValue.split(".")
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intPart}
      <span className="text-xs align-super">.{floatPart}</span>
    </p>
  )
}

export default ProductPrice
