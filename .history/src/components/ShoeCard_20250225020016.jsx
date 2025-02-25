const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImage }) => {
  return (
    <div className={`border-2 
    rounded-x1
      ${bigShoeImage === imgURl}
        ? 'border-coral-red'
        : 'border-    `}>ShoeCard</div>
  )
}

export default ShoeCard