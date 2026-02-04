import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
     <CardContent className=" p-5 flex flex-row items-center justify-between">
        <Image src="/Logo.svg" alt="Logo" width={120} height={50} />
        <Button size ="icon" variant= "outline">
            <MenuIcon />
        </Button>
     </CardContent>
    </Card>
  );
}

export default Header;