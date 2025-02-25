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
          src={imgURL.thumbnail}
alt="shoe collection"
width={127}
height
        />
      </div>
    </div>
  )
}

export default ShoeCard