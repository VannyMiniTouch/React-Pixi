const { Stage, NineSlicePlane, AppConsumer } = ReactPixi;

const img =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/speech_bubble.png";

class Plane extends React.Component {
    counter = 0;
    state = { x: 200, y: 130 };

    componentDidMount() {
        this.props.app.ticker.add(this.tick);
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.tick);
    }

    tick = (delta) => {
        this.counter += 0.05 * delta;

        this.setState(() => ({
            x: 2 + Math.cos(this.counter) * 0.8,
            y: 1 + Math.sin(this.counter) * 0.4
        }));
    };

    render() {
        return (
            <NineSlicePlane
                image={img}
                anchor={new PIXI.Point(200, 100)}
                pivot={new PIXI.Point(200, 100)}
                leftWidth={50}
                topHeight={30}
                rightWidth={60}
                bottomHeight={180}
                width={200 + 100 * this.state.x}
                height={200 + 100 * this.state.y}
                x={500 - 50 * this.state.x}
                y={330 - 50 * this.state.y}
            />
        );
    }
}

const App = () => (
    <Stage
        width={800}
        height={600}
        options={{ autoDensity: true, backgroundColor: 0xeef1f5 }}
    >
        <AppConsumer>{(app) => <Plane app={app} />}</AppConsumer>
    </Stage>
);

ReactDOM.render(<App />, document.body);