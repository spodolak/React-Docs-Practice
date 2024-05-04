import "./styles.css";
import MyButton from "./components/MyButton";

const user = {
  name: "Stephanie Lauren",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
};

const houseMembers = [
  { name: "Sasha", id: 1 },
  { name: "Lily", id: 2 },
  { name: "Alina", id: 3 },
];

const members = houseMembers.map((member) => (
  <li key={member.id}>{member.name}</li>
));

export default function MyApp() {
  return (
    <div className="App">
      <h1>{user.name}'s practice react app</h1>
      {user.imageUrl && <img src={user.imageUrl}></img>}
      <ul>{members}</ul>
      <MyButton />
      <MyButton />
    </div>
  );
}
