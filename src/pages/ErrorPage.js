import { Link } from "react-router-dom";

function ErrorPage() {
    return(
        <div>
            <Link to="/skillStack"><div>기술 스택</div></Link>
            <Link to="/project"><div>프로젝트</div></Link>
            <Link to="/account"><div>계정</div></Link>
            <Link to="/"><div>홈</div></Link>
        </div>
    )

};

export default ErrorPage;