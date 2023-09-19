import axios from "axios";
import Swal from "sweetalert2";

const AppointmentPopUp = ({ appointmentInfo, setIsModalOpen, refetch }: { appointmentInfo: any, setIsModalOpen: any, refetch: any }) => {

    const handleDeleteAppointment = async (id: string) => {
        console.log(id);
        try {
            const response = await axios.delete(`/api/appointments/id/${id}`);
            if (response.status === 200) {
                setIsModalOpen(false);
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Appointment Has Been Cancelled!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error: any) {
            console.log(error?.message);
        }
    }

    return (
        <div className="bg-sky-500 mt-44 max-w-2xl mx-auto p-14 absolute top-0 left-0 right-0 z-10 rounded-xl shadow-lg shadow-yellow-200 text-gray-50 border-2 border-yellow-300">
            <div>
                <h2 className="text-2xl text-center font-medium">Appointment Info</h2>
                <div className="flex justify-between items-center mt-7">
                    <h4 className="text-xl font-medium">Patient Name:</h4>
                    <p className="text-lg font-medium">{appointmentInfo?.patientName}</p>
                </div>
                <div className="flex justify-between items-center mt-7">
                    <h4 className="text-xl font-medium">Patient Email:</h4>
                    <p className="text-lg font-medium">{appointmentInfo?.patientEmail}</p>
                </div>
                <div className="flex justify-between items-center mt-7">
                    <h4 className="text-xl font-medium">Ticket Price:</h4>
                    <p className="text-lg font-medium">${appointmentInfo?.ticketPrice}</p>
                </div>
                <div className="flex justify-between items-center mt-7">
                    <h4 className="text-xl font-medium">Date:</h4>
                    <p className="text-lg font-medium">{appointmentInfo?.scheduleDate}</p>
                </div>
                <div className="flex justify-between items-center mt-7">
                    <h4 className="text-xl font-medium">Time:</h4>
                    <p className="text-lg font-medium">{appointmentInfo?.scheduleTime}</p>
                </div>
            </div>
            <div className="mt-10 flex justify-end">
                <button
                    className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
                    onClick={() => handleDeleteAppointment(appointmentInfo?._id)}
                >
                    <span
                        className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block border border-current bg-white px-8 py-3">
                        Cancel Appointment
                    </span>
                </button>
            </div>
            <div>
                <button
                    className="inline-block rounded-full border border-yellow-500 bg-yellow-500 px-5 py-3 text-white hover:bg-white hover:text-yellow-500 focus:outline-none focus:ring active:text-yellow-500 absolute top-5 right-5"
                    onClick={() => setIsModalOpen(false)}
                >
                    <span className="sr-only"> Close </span>
                    X
                </button>

            </div>
        </div>
    );
};

export default AppointmentPopUp;