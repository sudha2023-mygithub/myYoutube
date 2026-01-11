import Button from "./Button"

const list = ["All","Gaming","Songs","Live","Cricket","News","Cooking","Valentines","Badminton","Chess"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((button,index) => {
        return <Button key = {index} name={button}/>
      })}
      
    </div>
  )
}

export default ButtonList