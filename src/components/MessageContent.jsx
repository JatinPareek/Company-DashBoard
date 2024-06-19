import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

const MessageContent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-lg text-gray-200 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-5xl">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
              Hi, Ibnu Syahsudin
            </h1>
            <h3 className="m-0 relative text-base font-normal font-inherit text-gray-100">
              What’s new with you?
            </h3>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-sm">
            <div className="rounded-lg bg-white flex flex-row items-start justify-start pt-[11px] px-[15px] pb-3 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-500">
              <div className="h-12 w-[174px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gray-500" />
              <div className="relative font-medium inline-block min-w-[110px] z-[1]">
                May 15 - May 17
              </div>
              <input
                className="m-0 h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[24px] whitespace-nowrap text-left text-base text-white font-poppins mq750:flex-wrap">
          <div className="flex-1 rounded-lg bg-mediumvioletred flex flex-col items-start justify-start py-4 pr-5 pl-6 box-border relative gap-[12px] min-w-[201px]">
            <div className="w-[268px] h-[104px] relative rounded-lg bg-mediumvioletred hidden z-[0]" />
            <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit inline-block min-w-[123px] z-[1]">
              Job in progress
            </h3>
            <div className="relative text-5xl font-semibold inline-block min-w-[31px] z-[1] mq450:text-lgi">
              56
            </div>
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/mask-group-1.svg"
            />
          </div>
          <div className="flex-[0.9641] rounded-lg bg-cornflowerblue flex flex-col items-start justify-start py-4 pr-5 pl-8 box-border relative gap-[12px] min-w-[201px] mq450:flex-1">
            <div className="w-[267px] h-[104px] relative rounded-lg bg-cornflowerblue hidden z-[0]" />
            <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1]">{`News Candidate `}</h3>
            <div className="relative text-5xl font-semibold inline-block min-w-[31px] z-[1] mq450:text-lgi">
              43
            </div>
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/mask-group-2.svg"
            />
          </div>
          <div className="flex-1 rounded-lg bg-mediumslateblue flex flex-col items-start justify-start py-4 pr-5 pl-6 box-border relative gap-[12px] min-w-[201px]">
            <div className="w-[268px] h-[104px] relative rounded-lg bg-mediumslateblue hidden z-[0]" />
            <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit z-[1]">
              Jobs success Apply
            </h3>
            <div className="relative text-5xl font-semibold inline-block min-w-[22px] z-[1] mq450:text-lgi">
              17
            </div>
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/mask-group-3.svg"
            />
          </div>
        </nav>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start gap-[24px] max-w-full mq750:flex-wrap">
        <div className="flex-1 rounded-lg bg-white box-border flex flex-col items-start justify-start pt-3.5 px-[15px] pb-[22px] gap-[32px] min-w-[363px] max-w-full border-[1px] border-solid border-gray-700 mq750:gap-[16px] mq750:min-w-full">
          <div className="w-[559px] h-[396px] relative rounded-lg bg-white box-border hidden max-w-full border-[1px] border-solid border-gray-700" />
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
            <div className="w-56 flex flex-col items-start justify-start gap-[8px]">
              <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit inline-block min-w-[123px] z-[1]">
                Job Statistics
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-xs text-gray-100">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-2.5 h-2.5 relative rounded-[50%] bg-mediumvioletred z-[1]" />
                  </div>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px] z-[1]">
                    Applied
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-2.5 h-2.5 relative rounded-[50%] bg-cornflowerblue z-[1]" />
                  </div>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[49px] z-[1]">
                    Pending
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-2.5 h-2.5 relative rounded-[50%] bg-mediumslateblue z-[1]" />
                  </div>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[43px] z-[1]">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[83px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
              <FormControl
                className="self-stretch h-8 font-poppins font-medium text-xs text-gray-600 z-[1]"
                variant="standard"
                sx={{
                  borderColor: "#888",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  width: "83px",
                  height: "32px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "rgba(30, 30, 30, 0.6)",
                    fontSize: 12,
                    fontWeight: "Medium",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "12px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="12px"
                      height="12px"
                      src="/graph-container.png"
                      style={{ marginRight: "12px" }}
                    />
                  )}
                >
                  <MenuItem>Month</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-2xs text-gray-100 mq750:flex-wrap">
            <div className="h-[271px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="flex-1 rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-[18px] px-1 pb-[7px] gap-[18px] z-[1]">
                  <div className="w-[45px] h-[238px] relative rounded-lg bg-ghostwhite-200 hidden" />
                  <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                    <div className="relative inline-block min-w-[23px] z-[1]">
                      90%
                    </div>
                  </div>
                  <div className="w-[37px] flex-1 relative rounded-lg bg-cornflowerblue z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2.5">
                  <div className="relative inline-block min-w-[25px] z-[1]">
                    Mon
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[232px] flex flex-col items-start justify-start gap-[16px]">
              <div className="flex-1 rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-[19px] px-1 pb-[7px] gap-[19px] z-[1]">
                <div className="w-[45px] h-[199px] relative rounded-lg bg-ghostwhite-200 hidden" />
                <div className="flex flex-row items-start justify-start py-0 px-2">
                  <div className="relative inline-block min-w-[21px] z-[1]">
                    72%
                  </div>
                </div>
                <div className="w-[37px] flex-1 relative rounded-lg bg-mediumvioletred z-[1]" />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-3">
                <div className="relative inline-block min-w-[20px] z-[1]">
                  Tue
                </div>
              </div>
            </div>
            <div className="h-[197px] flex flex-col items-start justify-start gap-[16px]">
              <div className="flex-1 rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-5 px-1 pb-[7px] gap-[16px] z-[1]">
                <div className="w-[45px] h-[164px] relative rounded-lg bg-ghostwhite-200 hidden" />
                <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[7px]">
                  <div className="relative inline-block min-w-[22px] z-[1]">
                    43%
                  </div>
                </div>
                <div className="w-[37px] flex-1 relative rounded-lg bg-cornflowerblue z-[1]" />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-2.5">
                <div className="relative inline-block min-w-[25px] z-[1]">
                  Wed
                </div>
              </div>
            </div>
            <div className="h-[225px] w-[45px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border text-mediumvioletred">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 rounded-lg bg-snow flex flex-col items-start justify-start pt-[19px] px-[3px] pb-[7px] gap-[18px] z-[1] border-[1px] border-solid border-mediumvioletred">
                  <div className="w-[45px] h-48 relative rounded-lg bg-snow box-border hidden border-[1px] border-solid border-mediumvioletred" />
                  <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[7px]">
                    <div className="relative font-medium inline-block min-w-[22px] z-[1]">
                      70%
                    </div>
                  </div>
                  <div className="w-[37px] flex-1 relative rounded-lg bg-mediumvioletred z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-3">
                  <div className="relative font-semibold inline-block min-w-[22px] z-[1]">
                    Thu
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[246px] w-[114px] flex flex-row items-end justify-start gap-[24px]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-[19px] px-1 pb-[7px] gap-[18px] z-[1]">
                  <div className="w-[45px] h-[213px] relative rounded-lg bg-ghostwhite-200 hidden" />
                  <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                    <div className="relative inline-block min-w-[23px] z-[1]">
                      84%
                    </div>
                  </div>
                  <div className="w-[37px] flex-1 relative rounded-lg bg-cornflowerblue z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                  <div className="relative inline-block min-w-[15px] z-[1]">
                    Fri
                  </div>
                </div>
              </div>
              <div className="h-[185px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex-1 rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-[18px] px-1 pb-[7px] gap-[18px] z-[1]">
                    <div className="w-[45px] h-[152px] relative rounded-lg bg-ghostwhite-200 hidden" />
                    <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[7px]">
                      <div className="relative inline-block min-w-[22px] z-[1]">
                        32%
                      </div>
                    </div>
                    <div className="w-[37px] flex-1 relative rounded-lg bg-mediumslateblue z-[1]" />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[13px]">
                    <div className="relative inline-block min-w-[20px] z-[1]">
                      Sat
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[225px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="flex-1 rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-[19px] px-1 pb-[7px] gap-[18px] z-[1]">
                  <div className="w-[45px] h-48 relative rounded-lg bg-ghostwhite-200 hidden" />
                  <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                    <div className="relative inline-block min-w-[23px] z-[1]">
                      68%
                    </div>
                  </div>
                  <div className="w-[37px] flex-1 relative rounded-lg bg-cornflowerblue z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[11px]">
                  <div className="relative inline-block min-w-[22px] z-[1]">
                    Sun
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[189px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="flex-1 rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-[18px] px-1 pb-[7px] gap-[18px] z-[1]">
                  <div className="w-11 h-[156px] relative rounded-lg bg-ghostwhite-200 hidden" />
                  <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                    <div className="relative inline-block min-w-[22px] z-[1]">
                      34%
                    </div>
                  </div>
                  <div className="w-9 flex-1 relative rounded-lg bg-mediumslateblue z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[9px]">
                  <div className="relative inline-block min-w-[27px] z-[1]">
                    Mon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[268px] flex flex-col items-start justify-start py-6 px-[34px] box-border relative gap-[82px] min-w-[268px] mq450:gap-[41px] mq450:pt-5 mq450:pb-5 mq450:box-border mq750:flex-1">
          <div className="w-full h-full absolute !m-[0] top-[400px] right-[-268px] bottom-[-400px] left-[268px] rounded-lg bg-white box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-700" />
          <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px]">
            <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit z-[1]">
              Applicants summary
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[42px] text-7xl-5">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[23px] pl-6">
              <div className="flex-1 flex flex-col items-start justify-start pt-[45.9px] px-[38px] pb-[45.2px] relative gap-[4.2px]">
                <div className="w-[204px] h-[146px] absolute !m-[0] top-[-29px] left-[-25.6px] z-[1] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[1] object-contain absolute left-[0px] top-[-2px] [transform:scale(1.072)]"
                    alt=""
                    src="/group-8875.svg"
                  />
                </div>
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full z-[2] flex items-center justify-center">
                  <img
                    className="w-full h-full overflow-hidden z-[2] object-contain absolute left-[0px] top-[3px] [transform:scale(1.302)]"
                    loading="lazy"
                    alt=""
                    src="/group-8876.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-2.5">
                  <div className="relative font-semibold inline-block min-w-[56px] z-[3] mq450:text-2xl">
                    68%
                  </div>
                </div>
                <div className="relative text-xs font-medium text-gray-100 inline-block min-w-[76px] z-[3]">
                  Applications
                </div>
              </div>
            </div>
            <h3 className="m-0 relative text-base font-medium font-inherit text-gray-100 text-center z-[1]">
              <p className="m-0">Total time off taken by</p>
              <p className="m-0">employees in this month</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit">
            Pinned progress
          </h2>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-2.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-mini mq750:flex-wrap">
          <div className="flex-1 rounded-lg bg-white box-border flex flex-row items-end justify-between py-3 px-[17px] min-w-[187px] gap-[20px] border-[1px] border-solid border-gray-700">
            <div className="h-20 w-[268px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gray-700" />
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[110px] z-[1]">
                Weekly Target
              </h3>
              <div className="relative text-xs leading-[20px] text-gray-100 inline-block min-w-[83px] z-[1]">
                32% achieved
              </div>
            </div>
            <div className="h-[52px] w-[52px] relative text-xs">
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-ghostwhite-100 w-full h-full z-[1]" />
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumvioletred w-full h-full z-[2]" />
              </div>
              <div className="absolute top-[16px] left-[14px] leading-[20px] font-medium inline-block min-w-[24px] z-[3]">
                32%
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-white box-border flex flex-row items-end justify-between py-3 px-[17px] min-w-[187px] gap-[20px] border-[1px] border-solid border-gray-700">
            <div className="h-20 w-[268px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gray-700" />
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[106px] z-[1]">
                Montly Target
              </h3>
              <div className="relative text-xs leading-[20px] text-gray-100 inline-block min-w-[84px] z-[1]">
                56% achieved
              </div>
            </div>
            <div className="h-[52px] w-[52px] relative text-xs">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-ghostwhite-200 w-full h-full z-[1]" />
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cornflowerblue w-full h-full z-[2]" />
                <div className="absolute top-[16px] left-[14px] leading-[20px] font-medium inline-block min-w-[25px] z-[3]">
                  56%
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-white box-border flex flex-row items-end justify-between py-3 px-[17px] min-w-[187px] gap-[20px] border-[1px] border-solid border-gray-700">
            <div className="h-20 w-[267px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gray-700" />
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit z-[1]">
                combined target
              </h3>
              <div className="relative text-xs leading-[20px] text-gray-100 inline-block min-w-[84px] z-[1]">
                88% achieved
              </div>
            </div>
            <div className="self-stretch w-[52px] relative rounded-[50%] bg-ghostwhite-300 hidden" />
            <div className="h-[52px] w-[52px] relative text-xs">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumslateblue w-full h-full z-[2]" />
              <div className="absolute top-[16px] left-[14px] leading-[20px] font-medium inline-block min-w-[25px] z-[3]">
                88%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MessageContent.propTypes = {
  className: PropTypes.string,
};

export default MessageContent;
