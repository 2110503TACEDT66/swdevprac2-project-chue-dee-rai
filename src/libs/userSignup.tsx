export default async function userSignUp(item: User){

	const response = await fetch("http://localhost:5000/api/v1/auth/register",{
		method: "POST",
		headers: {
			"Content-Type":"application/json",
			
		},
		body: JSON.stringify({
			name : item.name,
			email: item.email,
			role: "user",
			password: item.password,
			tel: item.tel
		}),

	})

	if (!response.ok){
		throw new Error("Failed to log-in");
	}

	return await response.json();
}