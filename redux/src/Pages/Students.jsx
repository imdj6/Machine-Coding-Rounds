import React, { useEffect, useState } from 'react'

function Students() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getstudents = async () => {
            try {
                setLoading(true);
                const data = await fetch("https://reqres.in/api/users");
                const studentd = await data.json();
                setStudents(studentd.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getstudents();
    }, []);

    if (loading || !students) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                    alignItems: "center",
                }}
            >
                Loading...
            </div>
        );
    }
    return (
        <>
            <div className="product-main" style={{ minHeight: "100vh" }}>
                {console.log(students)}
                {students?.map((student, item) => (
                    <div className="product-card" key={item}>
                        <div key={student.id} className="">
                            <img
                                src={student.avatar}
                                alt={student.first_name}
                                className="card-img"
                            />
                        </div>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            {student.email}
                        </div>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            {`${student.first_name} ${student.last_name}`}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Students