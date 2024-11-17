import toast, { Toaster } from "react-hot-toast";

const UserInsert = () => {
    const handleSubmit = e => {
        e.preventDefault();
        alert("click button ")
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const payload = { name, email,password };
        console.log(payload);
        fetch(`http://localhost:3000/api/v1/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then((res) => {
            console.log(res);
            if(res.status===409){
                toast.error("User email already exists");
                return;
            }
            if(res.status===400){
                toast.error("Email or password required");
                return;
            }
            if(res.status===201){
                toast.success("User created successfully");
                e.target.reset()
                return;
            }
            e.target.reset();
        }).catch((err) => {
            console.error(err);
        });

    };
    return (
        <div>
            <div className='w-11/12 mx-auto ' >
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster position="top-center"></Toaster>
        </div>
    )
}

export default UserInsert
