import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";

const Community: NextPage = () => {
    return (
        <div>
            COMMUNITY{" "}
            <button onClick={() => alert("HELLO MIT - 20... 😊")} style={{ margin: "15px" }}>
                PRESS ME
            </button>
        </div>
    );
};

export default withLayoutBasic(Community);