import DeleteBtn from "./TodoDelete";
import EditBtn from "./TodoEdit";

export default function TodoItem() {
  return (
    <div>
      <p>
        <DeleteBtn />
      </p>
      <p>
        <EditBtn />
      </p>
    </div>
  );
}
