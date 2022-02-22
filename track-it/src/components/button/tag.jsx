import Button from "@mui/material/Button";


function Tag({action, content, color}) {

  // {/* <Button variant="contained" color="white" size="small" onClick={() => action(content)} className="tag">
  //     <p>#{content}</p>
  //   </Button> */}

  return (
    <Button variant="contained" color={color} size="small" onClick={() => action(content)} className="tag">#{content}</Button>
  );
}

export default Tag;