// import React from 'react';

// const ContactItem = (props) => {
//     return (
//         // <section> diese Teil gehört zur übergeordneten Darstellung, nicht zum Item
//         //     {/* <div>
//         //         <p>Picture</p>
//         //         <p>Name</p>
//         //         <p>Popularity</p>
//         //     </div> */}
//         <div>
//             <img src={props.Contacts.pictureUrl}></img>
//             <p>{props.Contacts.name}</p>
//             <p>{props.Contacts.popularity}</p>
//         </div>
//         // </section>
//     );
// }

// export default ContactItem; props


// Version Anass
//-------------------------
import React from 'react';

const ContactItem = (props) => {

    return (
        <tr>
            <td><img src={props.pictureUrl} alt="" /> </td>
            <td>{props.name} </td>
            <td>{(props.popularity * 1).toFixed(2)}</td>
            <td><button onClick={() => props.deleteContact(props.popularity)}>delete</button></td>
        </tr>
    );
}

export default ContactItem;