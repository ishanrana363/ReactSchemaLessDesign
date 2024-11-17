import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const LoginhtmlForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit");

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        const payload = { email, password };

        try {
            let res = await axios.post(`http://localhost:3000/api/v1/login`, payload);
            console.log(res.data.data);

            if (res.data.status === "success") {
                alert("success");
                localStorage.setItem("token", JSON.stringify(res.data.data));
            } else if (res.data.status === "error") {
                alert("error");
                console.log(res);
            }
        } catch (error) {
            // Log the error details
            console.error("An error occurred:", error);

            // Optional: Log detailed error information
            if (error.response) {
                // Server responded with a status code outside the 2xx range
                console.error("Error response data:", error.response.data.message);
                toast.error(error.response.data.message )
                console.error("Error status:", error.response.status);
                console.error("Error headers:", error.response.headers);
            } else if (error.request) {
                // Request was made but no response received
                console.error("Error request:", error.request);
            } else {
                // Something else happened
                console.error("Error message:", error.message);
            }
        }
    };

    return (
        <div className='' >
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5  ">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                </div>
                <div className="mb-5  ">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            <Toaster position="top-center"></Toaster>
        </div>
    )
}

export default LoginhtmlForm
