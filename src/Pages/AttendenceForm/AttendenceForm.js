import React, { useEffect, useState } from 'react';
import logo from '../../assets/image/title.png';


const Attendance = () => {
    

    const [attendanceInfo, setAttendanceInfo] = useState([]);
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `bearer ${localStorage.getItem('ultimateAccessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAttendanceInfo(data);
                // setLoader(false);
            })
    }, [])

    let attendanceInfoArray = [];

    for (const key in attendanceInfo) {
        let attendanceArrayStatusList = [];
        let attendanceArrayDateList = [];

        const value = attendanceInfo[key];
        const attendanceList = value.attendance;

        // get the attendance date list of a person and set them into attendanceArrayDateList
        attendanceArrayDateList = Object.keys(value.attendance);

        // get the attendance status list of a person and set them into attendanceArrayStatusList
        for (const key2 in attendanceList) {
            attendanceArrayStatusList.push(attendanceList[key2]);
        }

        // set a new property in attendanceInfoArray for attendance date list and attendance status
        value.attendanceArrayList = attendanceArrayStatusList;
        value.attendanceArrayDateList = attendanceArrayDateList
        attendanceInfoArray.push(value)
    }



    return (
        <div className='container main__container'>
            <div className="navbar main__container  ">
                <img  src={logo} alt="logo"  />
            </div>
            <div className='d-flex justify-content-center my-1 '>
            <div className='bg-primary border rounded-2'>
                <h1 className='text-white text-center  py-1 px-2 '>Attendance Information</h1>
            </div>
            </div>
            <div className="">
                <table className="table ">
                    <thead>
                        <tr>
                            {/* <th></th> */}
                            <th>Date</th>
                            <th>Employee Name</th>
                            
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            attendanceInfoArray.map((info, idx) =>
                                <tr key={info.id} className="hover">
                                    {/* <th>{idx + 1}</th> */}
                                    <td>{info?.attendanceArrayDateList[25]}</td>
                                    <td>{info?.name}</td>
                                    <td className='capitalize'>{info?.attendanceArrayList[25]?.status}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attendance;