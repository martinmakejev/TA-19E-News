export async function getSchools() {
    const response = await fetch("https://demo2.z-bit.ee/todo.json");
    var data = await response.json();
    console.log(data)
    return { props: { data } }
}

