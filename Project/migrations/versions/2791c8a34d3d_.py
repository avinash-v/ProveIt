"""empty message

Revision ID: 2791c8a34d3d
Revises: 
Create Date: 2018-10-16 22:39:34.570705

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2791c8a34d3d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('group',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=True),
    sa.Column('domain', sa.String(length=30), nullable=True),
    sa.Column('owner', sa.String(length=30), nullable=True),
    sa.Column('subOwner', sa.String(length=30), nullable=True),
    sa.Column('abstract', sa.Text(), nullable=True),
    sa.Column('groupType', sa.String(length=20), nullable=True),
    sa.Column('researchGroup', sa.Integer(), nullable=True),
    sa.Column('topic', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['researchGroup'], ['group.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_group_abstract'), 'group', ['abstract'], unique=False)
    op.create_index(op.f('ix_group_domain'), 'group', ['domain'], unique=False)
    op.create_index(op.f('ix_group_groupType'), 'group', ['groupType'], unique=False)
    op.create_index(op.f('ix_group_id'), 'group', ['id'], unique=True)
    op.create_index(op.f('ix_group_name'), 'group', ['name'], unique=True)
    op.create_index(op.f('ix_group_owner'), 'group', ['owner'], unique=False)
    op.create_index(op.f('ix_group_subOwner'), 'group', ['subOwner'], unique=False)
    op.create_index(op.f('ix_group_topic'), 'group', ['topic'], unique=False)
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=30), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_username'), 'user', ['username'], unique=True)
    op.create_table('group_followers_group',
    sa.Column('groupIdFollowed', sa.Integer(), nullable=False),
    sa.Column('groupIdFollower', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['groupIdFollowed'], ['group.id'], ),
    sa.ForeignKeyConstraint(['groupIdFollower'], ['group.id'], ),
    sa.PrimaryKeyConstraint('groupIdFollower', 'groupIdFollowed')
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('groupIdPosted', sa.Integer(), nullable=True),
    sa.Column('content', sa.Text(), nullable=True),
    sa.Column('datetime', sa.DateTime(), nullable=True),
    sa.Column('visibility', sa.String(length=10), nullable=True),
    sa.Column('owner', sa.String(length=10), nullable=True),
    sa.Column('userIdOwner', sa.Integer(), nullable=True),
    sa.Column('groupIdOwner', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['groupIdOwner'], ['group.id'], ),
    sa.ForeignKeyConstraint(['groupIdPosted'], ['group.id'], ),
    sa.ForeignKeyConstraint(['userIdOwner'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_post_content'), 'post', ['content'], unique=False)
    op.create_index(op.f('ix_post_groupIdPosted'), 'post', ['groupIdPosted'], unique=False)
    op.create_index(op.f('ix_post_id'), 'post', ['id'], unique=False)
    op.create_index(op.f('ix_post_owner'), 'post', ['owner'], unique=False)
    op.create_index(op.f('ix_post_visibility'), 'post', ['visibility'], unique=False)
    op.create_table('user_profile',
    sa.Column('id', sa.Integer(), nullable=True),
    sa.Column('collegeId', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=30), nullable=True),
    sa.Column('lastName', sa.String(length=30), nullable=True),
    sa.Column('contact', sa.Integer(), nullable=True),
    sa.Column('bio', sa.Text(), nullable=True),
    sa.Column('interests', sa.Text(), nullable=True),
    sa.Column('skills', sa.Text(), nullable=True),
    sa.Column('userType', sa.String(length=20), nullable=True),
    sa.Column('designation', sa.String(length=30), nullable=True),
    sa.Column('cgpa', sa.Integer(), nullable=True),
    sa.Column('researchBody', sa.String(length=30), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('collegeId')
    )
    op.create_index(op.f('ix_user_profile_bio'), 'user_profile', ['bio'], unique=False)
    op.create_index(op.f('ix_user_profile_cgpa'), 'user_profile', ['cgpa'], unique=True)
    op.create_index(op.f('ix_user_profile_collegeId'), 'user_profile', ['collegeId'], unique=True)
    op.create_index(op.f('ix_user_profile_contact'), 'user_profile', ['contact'], unique=True)
    op.create_index(op.f('ix_user_profile_designation'), 'user_profile', ['designation'], unique=False)
    op.create_index(op.f('ix_user_profile_firstName'), 'user_profile', ['firstName'], unique=False)
    op.create_index(op.f('ix_user_profile_interests'), 'user_profile', ['interests'], unique=False)
    op.create_index(op.f('ix_user_profile_lastName'), 'user_profile', ['lastName'], unique=False)
    op.create_index(op.f('ix_user_profile_researchBody'), 'user_profile', ['researchBody'], unique=False)
    op.create_index(op.f('ix_user_profile_skills'), 'user_profile', ['skills'], unique=False)
    op.create_index(op.f('ix_user_profile_userType'), 'user_profile', ['userType'], unique=False)
    op.create_table('user_to_group',
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('groupId', sa.Integer(), nullable=False),
    sa.Column('relationship', sa.String(length=10), nullable=True),
    sa.Column('role', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['groupId'], ['group.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['user_profile.id'], ),
    sa.PrimaryKeyConstraint('userId', 'groupId')
    )
    op.create_index(op.f('ix_user_to_group_relationship'), 'user_to_group', ['relationship'], unique=False)
    op.create_index(op.f('ix_user_to_group_role'), 'user_to_group', ['role'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_user_to_group_role'), table_name='user_to_group')
    op.drop_index(op.f('ix_user_to_group_relationship'), table_name='user_to_group')
    op.drop_table('user_to_group')
    op.drop_index(op.f('ix_user_profile_userType'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_skills'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_researchBody'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_lastName'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_interests'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_firstName'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_designation'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_contact'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_collegeId'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_cgpa'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_bio'), table_name='user_profile')
    op.drop_table('user_profile')
    op.drop_index(op.f('ix_post_visibility'), table_name='post')
    op.drop_index(op.f('ix_post_owner'), table_name='post')
    op.drop_index(op.f('ix_post_id'), table_name='post')
    op.drop_index(op.f('ix_post_groupIdPosted'), table_name='post')
    op.drop_index(op.f('ix_post_content'), table_name='post')
    op.drop_table('post')
    op.drop_table('group_followers_group')
    op.drop_index(op.f('ix_user_username'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    op.drop_index(op.f('ix_group_topic'), table_name='group')
    op.drop_index(op.f('ix_group_subOwner'), table_name='group')
    op.drop_index(op.f('ix_group_owner'), table_name='group')
    op.drop_index(op.f('ix_group_name'), table_name='group')
    op.drop_index(op.f('ix_group_id'), table_name='group')
    op.drop_index(op.f('ix_group_groupType'), table_name='group')
    op.drop_index(op.f('ix_group_domain'), table_name='group')
    op.drop_index(op.f('ix_group_abstract'), table_name='group')
    op.drop_table('group')
    # ### end Alembic commands ###
