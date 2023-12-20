import styles from "./styles.module.css";
import { Link } from "react-router-dom";


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar} >
			<div className="search-container">
					<form action="https://www.google.com/search" method="GET">
						<input type="text" placeholder="Search.." name="q" />
						<button type="submit"><i className="fa fa-search"></i></button>
					</form>
				</div>
				<h1>freeCodeCamp(A)</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>

			</nav>

			<div className={styles.mainbody}>
				<h1><center>Welcome freeCodeCamp.org</center></h1>
				<div className={styles.inbody} style={{ textAlign: 'center' }}>
					<h3>
						<p><a href="/java-courses">&#128187; Java Courses</a></p>
						<p><a href="/python-courses">&#128187; Python Courses</a></p>
						<p><a href="/react-courses">&#128187; React Courses</a></p>
						<p><a href="/angular-courses">&#128187; Angular Courses</a></p>
					</h3>
				</div>
				<Link to="/"/>
                <button className={styles.grey_btn} >
					<center>GetStarted</center>
				</button>


			</div>






		</div>
	);
};

export default Main;