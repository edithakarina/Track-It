import Button from "@mui/material/Button";

function LoginButton({children, onClick}) {
  return (
    <Button variant="contained" color="secondary" className="content bold" onClick={onClick}>{children}</Button>
  );
}

export default LoginButton;