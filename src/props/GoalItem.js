function GoalItem({children, title, id}) {
    

    return (

        <ul>
            <li>{title} (ID: {id})</li>
            <li>{children}</li>
    </ul>
    );
  
  }

  export default GoalItem;