import React from 'react'
import '../App.css'
import photo from '../assets/photo-1.jpg'


function Landing() {
    return (

        <>
            <div className='landing container-fluid  w-100' >
                <div className="row container d-flex align-items-center justify-content-betweeen w-100" >
                    <div className="col-lg-5"style={{marginLeft:"60px"}}>
                        <div className='m-5 p-5 w-100 text-light'>
                            <h1 className='fw-bolder ' style={{marginLeft:"25px"}}>WOW SLIDER</h1>
                            <p className='p-2 ' style={{textAlign:"right"}}>WOWSlider allows you with the simple click of the mouse to make an endless amount of adjustments to your slider. Responsive slider with touch/swipe support, full-width slider with thumbnail filmstrip and play/pause control, 3D effects,  text descriptions and others. </p>
                            <div className='d-flex align-items-center p-1 justify-content-between '>
                                <button className='btn btn-primary w-50 ' style={{margin:"10px"}}>DEMO</button>
                                <button className='btn btn-success w-50 '>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col-lg-6  "style={{height:"300px"}} >
                    <iframe style={{marginLeft:"50px"}} width="520" height="275" src="https://www.youtube.com/embed/nb3LBzHdYGs?si=ywUHp2HoEeIeDw6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="container w-100 " style={{minHeight:"100vh"}}>
                <h3 className='fw-bold pt-5'>HOW TO INSTALL THE EXTENSION</h3>
                <p className='pt-4'>To add the extension, in the Mobirise app open "Menu"-{'>'}"Extensions & Themes", find "WOW Slider" extension and click the green "+" icon ("WOW Slider" is available since Mobirise v2.5+). Then find "WOW Slider" block in the bottom of the block list..</p>
                <img className='img-fluid pt-5' src="https://mobirise.com/extensions/wowslider/assets/images/wowslider-1400x960-59.jpg" alt=""  />

            </div>
            <div className="container w-100 " style={{minHeight:"100vh"}}>
                <h3 className='fw-bold pt-5'>HOW TO USE THE EXTENSION</h3>
                <p className='pt-4'>Follow these simple steps to learn, how to use the "WOW Slider" Extension.</p>
                <ol>
                    <li> Go to Extensions & Themes in the left sidebar and add the extension to your Mobirise application.</li>
                    <li> Click on the red round “Add Block to Page” button in the right corner at the bottom of the application.</li>
                    <li>Drag & drop “WOW Slider” block to your project page.</li>
                    <li> Use blue "Gear" icon for change of page parameters.</li>
                </ol>
                <img className='img-fluid' src="https://mobirise.com/extensions/wowslider/assets/images/wowslider2-1400x973-93.jpg" alt="" />
               

            </div>
            <div className="container w-100 " style={{minHeight:"100vh"}}>
                <h3 className='fw-bold pt-5'>VIDEO TUTORIAL</h3>
                <p className='pt-4'>Watch the video tutorial to learn, how to use the WOW Slider.</p>
                <iframe className='w-100 'style={{minHeight:"100vh"}}  src="https://www.youtube.com/embed/nb3LBzHdYGs?si=-IeezgJrMEmhi7k-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              
            </div>



        </>

    )
}

export default Landing