const ShoeCard = ({ imgURL, changeBigShoeImg, BigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeIMG !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 
    rounded-x1
      ${bigShoeImg === imgURl
        ? 'border-coral-red'
        : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div>
        <img 
          src={imgURL}
        />
      </div>
    </div>
  )
}

export default ShoeCard