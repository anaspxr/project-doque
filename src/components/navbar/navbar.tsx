import React from "react";
import InviteButton from "./invitebutton";
import ProfileSection from "./profilesection";
import SearchField from "./searchfield";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#EDF1F4]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/home">
          <div className="flex items-center space-x-4">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAh1BMVEXx8fH///8AAADw8PD6+vr09PT39/cEBATt7e1KSkr5+fnR0dHj4+Pb29vp6eng4OCcnJyUlJR3d3empqbFxcWAgIBfX1/Nzc2vr6/X19daWlqOjo5oaGhTU1O+vr6KiooWFhZxcXEpKSk9PT1lZWVAQEAyMjKrq6tMTEwbGxsiIiIuLi4YGBgrAcWEAAAMRklEQVR4nO2dC3uquhKGGXMxIiByEVAB79p2///fdyYBNajt2UrXarOffKtLkIQ4byaXSeRpHcchTvP/PycLZposmGmyYKbJgpkmC2aaLJhpsmCmyYKZJgtmmiyYabJgpsmCmSYLZposmGmyYKbJgpkmC2aaLJhpsmCmyYKZJgtmmiyYabJgpsmCmSYLZposmGmyYKbJgpkmC2aaLJhpsmCmyYKZJgtmmiyYabJgpsmCmSYLZposmGmyYKbJgsl8TUamTtnDos65mDowIn+ITBJM+xiiHdn1NsKIyvstNf2Cx/DTGbu5iRDF0xwIY+csor2hASCsk5GR9tPba+L8rj9Wj6Z4exNj7GoRkZUvDRVCeoJIo9nZ5GsuRBOYpLIQzCrrQlWFeMWie/ue9dijSkW7pJOac+ZIDvSRCyhK5SswBOCd+2RNMJVIXdpkwYscS/oGn70Axhh3OeMdob8QRTQtEY/KZpdk4W7/8c/q/VCmuccoF+Tc+lRj5JQFyXQ22vzzz+ZwiqqAU6wgxsR9B/4bYP74XoXvCU5dt+lJ8h/1qvVwoGsfjhm044PyFfPjeSfH4BT7rkvQtz8Bxk+De602+119TALqSp8Qh3pxqRLObOr4FiWMKypHuDyrDyrlkkWefCzGLmuHx154z4HJnHz0AKzRZjYtwMWOAvn8cY732nNlQyPUqz8eZ9mG0uGyo/ZqkN8FNmydcogmjEG6uvrqRvsMcKyE5PA4WZazE1zgONJvDPlWjymWBTizT3NIVTjYhF/mGAoqWM/p7PvAlM+GgzWIpTr7xGOSDJL3LyoHb9wUrpoLfwXYQHX/reCROnvMNZR2v1du3QB8wjUYzCesZ2T1rWCoBMLB1w7DhNMEC/kkQ3tj2jew6gF2U+eqKabMG97a+EApTVRqt4DOuwp+bLjvGDZUre8jg1KfuvDqYVcv0tHbjRcTmA/aholz4HZ7eL+thG3wU6OisvutnM3n+LNvxveIZ10X7GOhAsUsfdMqYjiYocsal6+WuU8YH4fzGweG/VzWA0zaNRqTQIjAK/IInbLKIepU+86nDKN2QVyed9tuIUYK5BBjCImBJodgqrfG4WBDe2D17mMnn8sFC3Ndp9oP9r430qOo+cSVKxAZ1BI4DvSkGhbycKjcdkEmGI273SyjPzjcj3wZIqBdTFBvMIf8TfPKeyUXWM3KmAh3PdD8cYBctTdXLb1k8ISLhnXH3Sn0WZb1B1PzKMMoCJIF1JpbBksuVyCsWSozMl5d+hgevQKDqnkTDjYrUcG8jQ62d/sEiz3BTn4THqjpFFeIehcbhqCtP4gTdCKtyivlAHEd+mSLrPUcHxPeY//jm8BUGmPBTkt7G7vONeJD3y30thg6GHkVrnONm7CAXO9j74n782DN8on5+lptEzRbVO2dxI11fyww9BpK3EsO4vCxHvOvcvoLwNR2HPP1tEOz+mglOO+A1W40eOdyR+taNvNLvSnH8PNg7WvHYx94lZ/B5Chy7IBBOngHzWFyUuh0Q+yjvwJMjvmevnB+n3DtVhw9Qz20mOLgPiT6qgud3rl/GP9sU2yNUq7pDB6risr9KjWAqI9JdY8dA4QY0+vHy0PH49jHeuzqfAMYafZv1LCYdpwCpNk2bRqad9ITswmWE1Nxdpkce3i2OXsLp7r3hJ4Hpr8PNsKQSk1iOA8z13M7S/7Sc9VOt2ykjNC8E+WyDFfRO05kQOY0G8lCH14wOAn6LKG/IfJoOxlxJqVIPnTjQ84CxY2RsAgOelIJEmJTuXITvHEsdtFL0TI2mUGf/cXeTZGriyzAqt9tMqKP1zJYVNvDQvplqSUMsRGqwHAXXMImQmh3iyf8yVjx0sco9VJpy7SzR3o4MupKUT/qNMS3YNLs59SO6zTftjDQ2yqeBLyHw3qDTaBRoLZId0Gw0tyC1q1zHxtiNr3ZPq5VS5RLz/UEcEHGAUSorwyGsiX24Oq7HvtIF6i6nm8V0KpClw07K8rVYbvfbnRYub3mw+XSIR27lBbT0TWHUub+pl2qMqCjz3bWzk0Mf3Jc39xv9XQupK74oa0BZeOdcSFkH7c2dmyXt0SseHuQNjznwJNR343Fnh67B8jg+MDojvGlJ3b6tyw36RJsU3Et8P/LYI93RbceDb9oiXKzeOKkOtCwARoO251GeYjlhP9zg8ed2fJlPqHxXYqmvce88pO2eq6pkMqdgj5cT4MRrSl+4pgFg8n+s+S3hfxel6wfpbV9DOd1kFsl7ZMJL7bH58BUpHv6YtBDh8XYN0AstrdoyhvLisoVjuvUq85dWs7VLMPQ2C32FZVfuLz6hfRLYJotw0Zn+2ZhAGgKVvh4uj9nOyevlrlw1QMFDqd5ObjukmvddTUVwIBXI/mlDGkayR8HU5/D95/4CqmygMs1s9xH5MTP062WOg/HnqvqX31bySfHbUvemdGHy8qf5NEGTzc5dV7+kux5MDaN7lWHVSE4xkZyAULk7rBQW9deEi/SKA1ziYxRoXSmevwI4Vynui6YtSHybfOxak5XOQSvkj0PRuCxXPkMS7tdReSCQ0jXXJKFfJ4KreTq+Sq5y4ORM9BxnO47E/2wcwjBefDU1p8BU9E8cdpl1FniunaSA1qzgepcHmpRLmofGFPLHCGXOzg4UIyfo0cx2LD5H/K/1se0G29SyfnRDHIeqNuHp8j5XnK9tU3EBSbvxvX6iDMcTF/9ZuLZUfEPCP2bvD0KPfHtzmUvPjH2G8Dk01P3SwY17cmvcvj/L+JRqc6Pg8kxxoFqNLyhGnyElDmuuR5TcxUGK/G8E40c0kI9Cvjik0e/AUzNjoSBl093Bwm32pRRnMl5z3l56fIbwNq5jzCXBf44SZKs8AhXu0QvR1S/Bex8whq1D0v3LfSnwS4i2qPQfY36VWBXN/V/kvt3gX2jKb8MTOp7zPmFYN8jC2aaLJhpsmCmyYKZJgtmmiyYabJgpsmCmSYLZposmGmyYKbJgpkmC2aaLJhpsmCmyYKZJgtmmiyYabJgpsmCmSYLZposmGmyYKbJgpkmC2aaLJhpsmCmyYKZJgtmmiyYabJgpsmCmSYLZposmGmyYKbJgpkmC2b1e0Tu3rQvpHkh2rlJd/0nRf+jcj75/XTGy4KZpmfA6N3J5Yx2s+lvtUuU3qXc5pN/StS9Fkubiw8L/Vr/GuxsW/PhtJtE2xy3F1vD2tsf5PqXn3x39v/1rMeS9PIJAQMhLljyKp1Qeqna/PjQlvMFVo9qBkk5y2ShFOpRWS5oeFp7MJ7PE8rWZQ40LiMG1WnmQbAexU/Y+lwfYw5UEXUocMCfWQFxzIA6LriuA/JvPi0RVP4iUIrTSBwCk5hc5ncYtjDGgFx+Sygmp+Fkx4o1y09zCq7DwzxZwnFKD4G3FrPcWY4nS4hTb8bHJY0SKIs/BEbqRVbtpmnhpeDHyXZRRcvcCRcxP06nWT1N8n0YVGmaQLaox8dY1MjpT+uKx3Xt+fE0rdLQaVuyxyGUf8gqWZBKlLIGgtQnRByPYkvFcrJF9oUfeWFcrMHbsvUYovwPgVUnX1RlkC/GJygif5SxaRgcl8ksSVOvXk9EsvMny7E/mkRV4MfpokI3pbmYVKlXRcnMD9fBbAJQHNWfHPZ3HsB4FqKDS2wCkE/lyzyBerHYFSM8T8k8KhOehhF6ro4/xB8CI4soqSIY11mJYE4ZQJxDmlbHIs3Bq6NsvIQC+2CZRwHW92iG7S5YytMc2LKKeJVCNJZdiiuuMbiUZ9EE6AlJ+dzH9k3ymrFkVjHlsbwW1Q5EfiqAF8vFE7Y+MSrKXp/V8RqytNhDsXZGHoRHCBcgWCobSZaOdzBZCrr1lwUEcYhJEyfKgOcLzJ8hWA3YVcBtuHxsAykEO/RhieUfsUrwjip1IK8pjCpYjvF9tgV3IcehZPnZb/HtCYZFl8sqqaGYwnS0nJJwVGVlBGk5F9jojrN1xqPSy+ejBJL5Ka9yiLKo8nfzKZ/OZ5OiZskU6nFTHJvutx+yoFMCeTlaFzBH18J6v/SxcvBUzPYx0PWpnEBSo5Xe+pmh48XI4/m56Kv7+5b2WK+AudrU9XD6pOfXy6yuXYPLLH/5k+WX+y5z+WV+b88ehQBf69+DXSMb2vm0rhl67msIRvVitAwabcdyeglm6DWw+UMh1a1hMqTTL1F6k6Fz/Nyorp/vY0/3PvFf6X/s47gsJD2OaAAAAABJRU5ErkJggg=="
              alt="Logo"
              className="h-8 w-8"
              width={300}
              height={300}
            />
            <span className="font-bold text-xl text-gray-800">DOQUE</span>
          </div>
        </Link>
        <div className="relative w-5/12 mx-4">
          <SearchField />
        </div>
        <div className="flex items-center space-x-6">
          <InviteButton />
          <ProfileSection />
        </div>
      </div>
    </nav>
  );
}
