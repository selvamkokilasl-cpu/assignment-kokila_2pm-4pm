function Student(props) {
return (
<div>
<h2>Name: {props.name}</h2>
<p>Course: {props.course}</p>
<p>Age: {props.age}</p>
<hr />
</div>
);
}


export default Student;