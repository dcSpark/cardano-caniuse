import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'Flint',
  injectAs: 'flint',
  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALOSURBVHgBxZr/fdMwEMVPgQE8QpigHSGdgDABSlmADVo2KBPEbAATNExAOwHegDBAI94JuXUcJzpFJ/X7R+3aZ+k9/ZY+IaqEu6abJ0t3pMyMKsDinaNbZHZByhQ30IunQhQ1UFo8U8zAlHhnaE7KFDFQo+R71A3UFM+oGqgtnlEz8BrimbekgJZ4Z2mxI1qgVDempY3km+wacJ/oo4r4a1pjlLo3BoWBKxeK5DtDGXjxO2ql8cb5kr3aS8NSA8EbmpilEX8Vq4mzayBVfODHXhonxPv3RJ8pwlkGzhGPZvYFpfm8mIuJ95j42inZADKeQ3zSqpLFv2lf+olIvJD0GkAHw99GGg7x30bi50jjFymtTJMMIHOLdjkXx/8Xbwffs/j7lDRipNWAkQ1tTA3xjNgABFxKM68lnkmpgUth3KOWeMwDXSxGbGAnE/CITBf9PyVLvielBqIjD8QvMdZv+b6GeCZlMbc99TIsE7rBo4anUqxVhs94V9ZQwjAcQ2U1ykDYXh+BmQdc3k3GYkCAs7WL9Ktg9iSaG5rGryitoKmxOecXddtYmpH3ejXAYPi0KNmlW/nSnwigD30f4etuRT9x+54yUDUQaNA0FhPPu1n7UuKhpi4c5VHlZA50xu3vA5DzTWyEUp0HMujCxqTrH4QtaHStD4N/YzGlDRwTfyv5GAYeYjEl+kDPlPi17+hCULrfBTFFyBYfJsZoDZQwkC0+sJIEaRtQER/2z50kVtOAlvivwy1ojBQDp6b9Y6ONpQTCRig6vA4RG5gdH9IOxAcxSULGu7gEXTL4hIzb5ujxtHjrZ9jUkwtLZ5B8tBgOYJe43cL9nWkPm5Y/OzL0W5Rehngm62z0GFIDocMmNbUxtRZzB4TTuizxzKsYGB815lDdgKZ4pkgfYLDbOtiraItnqtVACfFMnd9KFBLPlP+tREHxRUEf+PNkywv/BwtmbmF9XyQWAAAAAElFTkSuQmCC',
  Apis: {
    [Api.Enable]: SupportLevel.Supported,
    [Api.IsEnabled]: SupportLevel.Supported,
    [Api.ApiVersion]: SupportLevel.Supported,
    [Api.Name]: SupportLevel.Supported,
    [Api.Icon]: SupportLevel.Supported,
    [Api.GetNetworkId]: SupportLevel.Supported,
    [Api.GetUtxos]: SupportLevel.Supported,
    [Api.GetBalance]: SupportLevel.Supported,
    [Api.GetUsedAddresses]: SupportLevel.Supported,
    [Api.GetUnusedAddresses]: SupportLevel.Supported,
    [Api.GetChangeAddress]: SupportLevel.Supported,
    [Api.GetRewardAddress]: SupportLevel.Supported,
    [Api.SignTx]: SupportLevel.Supported,
    [Api.SignData]: SupportLevel.Supported,
    [Api.SubmitTx]: SupportLevel.Supported,
    [Api.GetCollateral]: SupportLevel.Experimental,
    [Api.OnAccountChange]: SupportLevel.Supported,
    [Api.OnNetworkChange]: SupportLevel.Supported
  }
}