// import React from 'react';
// import './style/productComparision.css';
// import asgard from './images/asgardsofa.png';
// import outdoorSofa from './images/outdoorsofa.png'
// export default function ProductComparision() {
//     const generalData =[
//         {
//             salePackage: "Sectional Sofa",
//             modelNumber: "tjsh7cdnk88sn",
//             secondaryMaterial: "solid wood",
//             confriguration: 'L-shaped',
//             upHoisteryMaterial: 'Fabric + Cotton',  
//             upHoisteryColor: 'Bright Gray & Lion'
//         },
//         {
//             salePackage: "Three seater Sofa, Single Seater",
//             modelNumber: "tjsh7cdds99sn",
//             secondaryMaterial: "solid wood",
//             confriguration: 'L-shaped',
//             upHoisteryMaterial: 'Fabric + Cotton',
//             upHoisteryColor: 'Bright Gray & Lion'
//         }
//     ] 

//     const productData = [
//         {
//             fillingMaterial: 'Foam',
//             finishType: 'Bright Gray & Lion',
//             adjustTableHeadrest: 'No',
//             maximumLoadCapacity: '450KG',
//             originOfManufacture: 'India'
//         },
//         {
//             fillingMaterial: 'Matte',
//             finishType: 'Bright Gray & Lion',
//             adjustTableHeadrest: 'Yes',
//             maximumLoadCapacity: '580KG',
//             originOfManufacture: 'India'
//         }
//     ]


//   return (
//     <div>
//       <div class="contain">
//         <div class="first">
//                 <h2>Go to the product <br/> page for more <br/> products</h2>
//                 <button>view more</button>
//         </div>
//         <div class="two">
//        <img  className='firstImage' src={asgard} alt="" />
//                 <h2>Asgaard Sofa</h2>
//         </div>

//         <div class="three">
//         <img className='firstImage' src={outdoorSofa} alt=""/>
//             <h2>Outdoor Sofa Set</h2>
//         </div>

//         <div class="four">
//                 <h2>Add A Product</h2>
//         </div>
//         </div>
//         <div className="general">
//             <h3>General</h3>
//             <table>
//                 <th>
//                     {/* {productData.map()}  */}
//                 </th>

//                 <tr>
//                     <td>
//                         Sales Package
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         Sales Package
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     </div>
//   )
// }


import React from 'react';
import './style/productComparision.css';
import asgard from './images/asgardsofa.png';
import outdoorSofa from './images/outdoorsofa.png';

export default function ProductComparision() {
    const generalData = [
        {
            salePackage: "Sectional Sofa",
            modelNumber: "tjsh7cdnk88sn",
            secondaryMaterial: "solid wood",
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Gray & Lion'
        },
        {
            salePackage: "Three seater Sofa, Single Seater",
            modelNumber: "tjsh7cdds99sn",
            secondaryMaterial: "solid wood",
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Gray & Lion'
        }
    ];

    const productData = [
        {
            fillingMaterial: 'Foam',
            finishType: 'Bright Gray & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '450KG',
            originOfManufacture: 'India'
        },
        {
            fillingMaterial: 'Matte',
            finishType: 'Bright Gray & Lion',
            adjustableHeadrest: 'Yes',
            maximumLoadCapacity: '580KG',
            originOfManufacture: 'India'
        }
    ];

    return (
        <div>
            <div className="contain">
                <div className="first">
                    <h2>Go to the product<br /> page for more<br /> products</h2>
                    <button>view more</button>
                </div>
                <div className="two">
                    <img className='firstImage' src={asgard} alt="Asgard Sofa" />
                    <h2>Asgard Sofa</h2>
                </div>
                <div className="three">
                    <img className='firstImage' src={outdoorSofa} alt="Outdoor Sofa Set" />
                    <h2>Outdoor Sofa Set</h2>
                </div>
                <div className="four">
                    <h2>Add A Product</h2>
                </div>
            </div>
            <div className="general">
                <h3>General</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {generalData.map((item, index) => (
                                <th key={index}>Product {index + 1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sales Package</td>
                            {generalData.map((item, index) => (
                                <td key={index}>{item.salePackage}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Model Number</td>
                            {generalData.map((item, index) => (
                                <td key={index}>{item.modelNumber}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Secondary Material</td>
                            {generalData.map((item, index) => (
                                <td key={index}>{item.secondaryMaterial}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Configuration</td>
                            {generalData.map((item, index) => (
                                <td key={index}>{item.configuration}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Upholstery Material</td>
                            {generalData.map((item, index) => (
                                <td key={index}>{item.upholsteryMaterial}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Upholstery Color</td>
                            {generalData.map((item, index) => (
                                <td key={index}>{item.upholsteryColor}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
    