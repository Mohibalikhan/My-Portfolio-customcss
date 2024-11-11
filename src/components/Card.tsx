import React from 'react';
import Image from 'next/image';

interface propstype{
    title:string;
    desc: string;
    img:string;
    tags:string[];
}


const Card:React.FC<propstype> = ({title,desc,img,tags}) => {
  return (

    <div className='border border-accent w-[300px] sm:w-[350px]'data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div>
        <Image className='w-[300px] sm:w-[350px] h- auto'
         src={img}
         width={350}
         height={350}
         alt={title}
         />
      </div>
    
   


      <div className="card-content">
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el)=>(
            <div className='card-tags' key={el}>
              {el}
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
  );
};

export default Card;







interface propstype{
    title:string;
    desc: string;
    img:string;
    tags:string[];
}





 
