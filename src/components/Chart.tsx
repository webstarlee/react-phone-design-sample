import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  LineChart,
  Area,
  Line
} from "recharts";

interface DataItem {
  time: number;
  price: number;
}

interface ChartProps {
  data: Array<DataItem>;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const randomBytes = new Uint8Array(10);
  window.crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes).map((byte) => byte.toString(16)).join('');
  const svgRandomeString = 'filter_'+randomString

  const CustomizedDot: React.FunctionComponent<any> = (props: any) => {
    const { cx, cy, index } = props;

    if (index == data.length - 1) {
      return (
        <svg
          x={cx - 25}
          y={cy - 25}
          width={50}
          height={50}
          viewBox="0 0 84 84"
        >
          <defs>
            <filter id={svgRandomeString} x="-2" y="-2" width="88" height="88" filterUnits="userSpaceOnUse">
              <feImage preserveAspectRatio="none" x="15" y="15" width="54" height="54" result="image" xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIyNyIgeTE9IjU0IiB4Mj0iMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjA2NSIgc3RvcC1jb2xvcj0iI2ZmYzg0MyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuOTM1IiBzdG9wLWNvbG9yPSIjZmY4ZjE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI1NCIgaGVpZ2h0PSI1NCIvPgo8L3N2Zz4K" />
              <feComposite result="composite" operator="in" in2="SourceGraphic" />
              <feBlend result="blend" in2="SourceGraphic" />
            </filter>
          </defs>
          <g>
            <g data-name="DESIGN CHART">
              <g style={{fill: '#ffa427', filter: `url(#${svgRandomeString})`}}>
                <circle id={`CIRCLE_CHART_${randomString}`} data-name="CIRCLE CHART" className="cls-1" cx="42" cy="42" r="12" style={{stroke: 'inherit', filter: 'none', fill: 'inherit'}} />
              </g>
              <use xlinkHref={`#CIRCLE_CHART_${randomString}`} style={{stroke: '#ffa427', filter: 'none', fill: 'none'}} />
            </g>
          </g>
        </svg>
      );
    }

    return <></>;
  };

  return (
    <ResponsiveContainer width="100%" aspect={3 / 1}>
      <AreaChart
        width={300}
        height={100}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <Area
          type="monotone"
          dataKey="price"
          stroke="#ff8f11"
          strokeWidth={3}
          fill='#fff7ee'
          fillOpacity={1}
          dot={<CustomizedDot />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
