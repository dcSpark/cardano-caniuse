import { styled, TableCell } from "@mui/material";

export const SupportedCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.success.main,
  color: prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));

export const NotSupportedCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.error.main,
  color: prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));

export const PartialSupportedCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.warning.main,
  color:  prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));

export const UnknownCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.grey[600],
  color:  prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));