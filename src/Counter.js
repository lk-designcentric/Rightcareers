import { CountUpAnimation } from "./CountUpAnimation";
import CounterComponent from "./CounterComponent";
import './counter.css'
export default function Counter() {
    return(
        <>
			<div className="main-container py-5 my-3">
				<div className="container wrapper">
					<CounterComponent
						initialValue={2500}
						targetValue={3000}
						text="No. of placements"
					/>
					<CounterComponent
						initialValue={0}
						targetValue={100}
						text="Clients"
					/>
					<CounterComponent
						initialValue={0}
						targetValue={7}
						text="Global Offices"
					/>
				</div>
			</div>
        </>
    )
}