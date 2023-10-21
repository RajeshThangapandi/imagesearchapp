import { Typography } from "@material-tailwind/react";
import { NumericFormat } from 'react-number-format';
import {FiThumbsUp} from 'react-icons/fi'
import {AiOutlineShareAlt } from "react-icons/ai"
import {AiOutlineInfoCircle}from "react-icons/ai"
import {AiOutlineInstagram}from "react-icons/ai"
import {RiTwitterXFill} from 'react-icons/ri'
import { RWebShare } from "react-web-share";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/modal'
import React,{ useState } from "react";
import { Modal, ModalContent } from "./Modal";
import "./Image.css";

const Image = ({ data }) => {
  

  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);


  return (
    
    <div>


    <figure className="relative h-96 w-full">
    
    <Modal onOpen={showModal}>
    <div className="holder">
    <img className=" mainimage h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} data-bs-toggle="modal"
    data-bs-target="#exampleModal"  />
        </div>
    </Modal>

    {isOpen && (
      
        <ModalContent onClose={() => setIsopen(false)}>


<div class="card">
<img src={data.urls.regular} alt=""  />
  <div class="card-body">
  <div class="card-img-overlay">
  <RWebShare
                data={{
                    text: "",
                    url: data.urls.full,
                    title: "GfG",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                 <button  class="btn btn-danger overlay-btn"><AiOutlineShareAlt/>Share </button>
            </RWebShare>
 
  <a href="div" class="btn btn-danger ml-3 overlay-btn"><AiOutlineInfoCircle/>Info </a>
    <a href={data.links.download} class="btn btn-success float-right">Download Now</a>
  </div>

<div class="user d-flex flex-wrap p-2 w-100 flex-row justify-content-between">
<div class="user-details d-flex flex-row justify-content-between">
 
 <div class="d-flex flex-wrap flex-row justify-content-between">
 <img
    class="rounded-circle"
    src={data.user.profile_image.small}
    alt="nature2"
/>

<div class="username">
<Typography variant="h5" color="Lime">
  {data.user.first_name}
 </Typography>
 <Typography color="gray" className="mt-2 font-normal">
 @{data.user.name}
 </Typography>
</div>
 </div>


<div class="insta-links d-flex  flex-row ">
    <AiOutlineInstagram>
      
    </AiOutlineInstagram>
    <span> 
    /{data.user.social.instagram_username}
      </span>
 </div>

{!data.user.social.twitter_username ??  <div class="twitter-links d-flex flex-row ">
    <RiTwitterXFill></RiTwitterXFill>
    <span> 
    /{data.user.social.twitter_username}
      </span>
</div>}


</div>


  <div class=" p-2 flex-shrink-1 downloadinfo  d-flex flex-row ">
  <div class="downloads d-flex flex-row">
    <p>1.2k</p> 

    <span class="ml-1">downloads</span>
    </div>

    <div class="likes ml-4 d-flex flex-row ">
      
      <FiThumbsUp/> <span>{data.likes/100}k</span>
      
      
    </div>
  </div>
</div>

<div class="tags">
  <p><b>Related Tags</b></p>

<div class="d-flex justify-content-between flex-wrap ">

{data.tags.map((el,index)=>{
  return <button type="button" class="btn btn-outline-secondary">{el.title}</button>
  
 })}





 
  </div>
  
</div>
  
   
  </div>



</div>


        </ModalContent>
      )}
  


  <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-1rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-1 px-1 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
      <div>

      <img
    className="rounded-full object-cover object-center "
    
    src={data.user.profile_image.small}
    alt="nature2"
  />
     <Typography variant="h5" color="Lime">
         {data.user.first_name}
        </Typography>
        <Typography color="gray" className="mt-2 font-normal">
        @{data.user.name}
        </Typography>
      </div>
      <Typography variant="h5" color="blue-gray">

        <div class="flex flex-row justify-content-center">
        <FiThumbsUp/>
      <NumericFormat value={data.likes/100} displayType={'text'} thousandSeparator={true} prefix={''} suffix={'k'} />
        </div>
     
      </Typography>
    </figcaption>
    </figure>

   
    </div>



  
   

    
  )
}

export default Image