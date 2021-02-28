import React, { useState, useEffect, ReactElement } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Mainnav from "./components/mainNav";

import {
	Manual,
	SignIn,
	Paint,
	Diary,
	Application,
	DiariesView,
	DiaryView,
	DiariesViewPublic,
	DiaryViewPublic,
	Calendar,
	CalendarRows,
	UserInfo,
} from "./pages/index";

function App(): ReactElement {
	return (
		<Router>
			<Main>
				<Mainnav color="" />
				<Switch>
					<Route exact path="/">
						<Manual />
						<SignIn />
					</Route>
					<Route exact path="/signup">
						<Manual />
						<Application />
					</Route>
					<Route exact path="/creatediary">
						<Paint />
						<Diary />
					</Route>
					<Route exact path="/diaryview">
						<DiariesView />
						<DiaryView />
					</Route>
					<Route exact path="/diarypublic">
						<DiariesViewPublic />
						<DiaryViewPublic />
					</Route>
					<Route exact path="/userinfo/calendar">
						<Calendar />
						<UserInfo />
					</Route>
					<Route path="/userinfo/calendarrows">
						<CalendarRows />
						<UserInfo />
					</Route>
				</Switch>
			</Main>
		</Router>
	);
}
// 아래 스타일을 적용한 컴포넌트를 만들어준다.

const Main = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
	//box-sizing: border-box;
	//border: 10px solid blue;
	margin: 2.5rem auto;
	height: 88vh;
	width: 80.4vw;

	@media only screen and (max-width: 1200px) {
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		border: 0px;
	}
	@media only screen and (max-width: 480px) {
		margin: 0px;
		width: 118%;
	}
`;

export default App;
