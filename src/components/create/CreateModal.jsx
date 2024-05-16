// import React, { useState } from 'react'
// import trash from '../../assets/images/Vector.svg'
// import calendar from '../../assets/Logos/calendar.svg'
// import Button from '../../components/Button/Button'
// import { Input } from '../../components/Input/Input'
// export default function CreateModal({pop, setPop}) {
//     function handleExit() {
//         setPop(false)
//     }
//     if (pop) {
//         document.body.classList.add('activePop')
//     } else {
//         document.body.classList.remove('activePop')
//     }
//     return (
//         <>
//             {pop &&
//                 <div className='create'>
//                     <div className='overlay'>
//                         <div className='create-details'>
//                             <div className="create-header">
//                                 <div className="create-prority">
//                                     <p>low prority</p>
//                                 </div>
//                                 <Button onClick={handleExit} className={"trash"} label={
//                                     <img src={trash} />
//                                 } />
//                             </div>
//                             <div className="create-title">
//                                 <Input className={"create-task"} placeholder={"Designate A Task . . . "}/>
//                             </div>
//                             <div className="create-footer">
//                                 <div className="create-date">
//                                     <img src={calendar} />
//                                     <p>10 jan, 2024</p>
//                                 </div>
//                                 <Button className={"create-btn"} label={"Submit"}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>}
//         </>
//     )
// }


import React, { useState } from 'react';
import trash from '../../assets/images/Vector.svg';
import calendar from '../../assets/images/calendar.svg';
import Button from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

function AddCardModal({ closeModal }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    // Close modal after submission
    closeModal();
  };

  return (
    <div className='create'>
      <div className='overlay'>
        <div className='create-details'>
          <div className="create-header">
            <div className="create-prority">
              <p>low prority</p>
            </div>
            <Button onClick={closeModal} className={"trash"} label={
              <img src={trash} alt="Trash" />
            } />
          </div>
          <div className="create-title">
            <Input
              className={"create-task"}
              placeholder={"Designate A Task . . . "}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="create-footer">
            <div className="create-date">
              <img src={calendar} alt="Calendar" />
              <p>10 jan, 2024</p>
            </div>
            <Button type="submit" onClick={handleSubmit} className={"create-btn"} label={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCardModal;

